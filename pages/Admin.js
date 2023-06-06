import { useState } from "react";
import Head from "next/head";
import Layout from "@/component/Layout";
import styles from "@/styles/admin.module.css";

const AdminPage = () => {
  const [pelanggan, setPelanggan] = useState([
    {
      name: "John Doe",
      NoHp: "081234567890",
      MenuM: "Nasi Goreng",
      JumlahM: 2,
      porsi: "Normal",
      MenuMin: "Es Teh",
      JumlahMin: 1,
      description: "Tidak ada",
      Temp: "Cash",
      Ketentuan: true,
    },
    // tambahkan data pelanggan lainnya jika diperlukan
  ]);

  const del = (item) => {
    // logika penghapusan data pelanggan
    const updatedPelanggan = pelanggan.filter((pel) => pel.name !== item.name);
    setPelanggan(updatedPelanggan);
  };

  return (
    <>
    <Head><title>AdminPage | Indah Nasgor</title></Head>
    <Layout/>
    <div className={styles.adminContainer}>
      <h2 className="text-center">ADMIN PAGE</h2>
      <hr />
      <div className={styles.tableResponsive}>
        <table className={`${styles.table} ${styles.tableBordered} ${styles.tableStriped}`}>
          <thead className={`${styles.tableHead} ${styles.bgInfo}`}>
            <tr>
              <th>No</th>
              <th>Nama Pemesan</th>
              <th>No Hp/WA</th>
              <th>Makanan</th>
              <th>Jml Makanan</th>
              <th>Porsi</th>
              <th>Minuman</th>
              <th>Jml Minuman</th>
              <th>Keterangan</th>
              <th>Pembayaran</th>
              <th>Kartu Member</th>
              <th>Setting</th>
            </tr>
          </thead>
          <tbody>
            {pelanggan.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.NoHp}</td>
                <td>{item.MenuM}</td>
                <td>{item.JumlahM}</td>
                <td>{item.porsi}</td>
                <td>{item.MenuMin}</td>
                <td>{item.JumlahMin}</td>
                <td>{item.description}</td>
                <td>{item.Temp}</td>
                <td>{item.Ketentuan ? "Ya" : "Tidak"}</td>
                <td>
                  <button className={styles.button} onClick={() => del(item)}>
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default AdminPage;
