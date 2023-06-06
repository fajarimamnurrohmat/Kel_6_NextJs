import Layout from "@/component/Layout";
import Image from "next/image";
import Head from "next/head";
import styles from "@/styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | Indah Nasgor</title>
      </Head>
      <Layout />
      <div className={styles.homeContainer}>
        <h1>
          Selamat Datang di Website
          <br />
          Warung Nasi Goreng Mbk Indah
        </h1>
        <p>
          Alamat : Jl. Fatahillah, Kode Pos 66214 RT 01/RW 02, Dusun Sentulan
          Kelurahan Panggungrejo
          <br />
          Kecamatan Tulunggung Kabupaten Tulunggung
        </p>
        <Image
          src=""
          alt="Foto Beranda"
          className={styles.homeImage}
          width={300}
          height={200}
        />
      </div>
    </>
  );
};

export default Home;
