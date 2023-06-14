import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import connectDB from '@/mongoConfig';
import User from './user';

const secretKey = 'kunciRahasia';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  const { email, password } = req.body;

  try {
    // Cek apakah pengguna terdaftar dalam database
    connectDB(); // Menghubungkan ke database MongoDB

    const user = await User.findOne({ email }); // Mencari pengguna berdasarkan email

    if (!user) {
      res.status(400).json({ message: 'Invalid credentials' });
      return;
    }

    // Verifikasi kata sandi pengguna
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      res.status(400).json({ message: 'Invalid credentials' });
      return;
    }

    // Jika pengguna valid, buat token JWT
    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });

    // Kirimkan respons dengan token JWT
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}