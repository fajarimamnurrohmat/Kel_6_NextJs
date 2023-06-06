import React, { useState } from "react";
import axios from "axios";
import Layout from "@/component/Layout";
import Head from "next/head";
import styles from "@/styles/userpage.module.css";

const FormPemesanan = () => {
  const [Data, setData] = useState({
    name: "",
    MenuM: "",
    JumlahM: "",
    porsi: "",
    MenuMin: "",
    JumlahMin: "",
    NoHp: "",
    description: "",
    Temp: [],
    Ketentuan: "",
    Simpan: false,
  });
  const [dataList, setDataList] = useState([]);

  const MenuMakanan = [
    { value: "makanan1", text: "Nasi Goreng" },
    { value: "makanan2", text: "Mie Goreng" },
    { value: "makanan3", text: "Cap Jay" },
  ];

  const porsi = [
    { value: "porsi1", text: "Kecil" },
    { value: "porsi2", text: "Sedang" },
    { value: "porsi3", text: "Jumbo" },
  ];

  const MenuMinuman = [
    { value: "minuman1", text: "Es Teh" },
    { value: "minuman2", text: "Es Jeruk" },
    { value: "minuman3", text: "Kopi" },
  ];

  const Temps = [
    { value: "temp1", text: "Bayar di Warung" },
    { value: "temp2", text: "Transfer" },
  ];

  const saveData = () => {
    const newData = { ...Data };
    setDataList([...dataList, newData]);
    setData({
      name: "",
      MenuM: "",
      JumlahM: "",
      porsi: "",
      MenuMin: "",
      JumlahMin: "",
      NoHp: "",
      description: "",
      Temp: [],
      Ketentuan: "",
      Simpan: false,
    });
  };

  const handleTempChange = (value, checked) => {
    let newTemp = [...Data.Temp];
    if (checked) {
      newTemp.push(value);
    } else {
      newTemp = newTemp.filter((temp) => temp !== value);
    }
    setData({ ...Data, Temp: newTemp });
  };

  const edit = (item) => {
    setData({ ...item });
    setDataList(dataList.filter((data) => data !== item));
  };

  const del = (item) => {
    const newDataList = dataList.filter((data) => data !== item);
    setDataList(newDataList);
  };

  const save = () => {
    // Implement save functionality here
    console.log("Save all data", dataList);
  };
  return (
    <>
      <Head>
        <title>UserPage | Indah Nasgor</title>
      </Head>
      <Layout />
      <div className="container bg-light p-5 rounded-lg shadow-lg">
        <h2 className="text-center border-bottom pb-3">
          Form Pemesanan Nasi Goreng
        </h2>
        <div className="row bg-secondary p-3 rounded-lg">
          <div className="col-lg-6 col-md-12">
            <div>
              <label className="text-light">Nama</label>
              <input
                type="text"
                value={Data.name}
                onChange={(e) => setData({ ...Data, name: e.target.value })}
                className="form-control"
                placeholder="Masukkan nama anda"
                id="Data-nama"
              />
            </div>
            <div className="form-group">
              <label className="text-light">Pilih Makanan</label>
              <select
                className="form-control"
                value={Data.MenuM}
                onChange={(e) => setData({ ...Data, MenuM: e.target.value })}
              >
                <option value="" disabled selected>
                  Pilih menu makanan
                </option>
                {MenuMakanan.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.text}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-light">Jumlah Makanan</label>
              <input
                type="number"
                value={Data.JumlahM}
                onChange={(e) => setData({ ...Data, JumlahM: e.target.value })}
                className="form-control"
                placeholder="Jumlah makanan"
                id="Data-jumlahM"
              />
            </div>
            <hr />
            <div className="form-group">
              <label className="text-light">Porsi</label>
              {porsi.map((item) => (
                <div key={item.value} className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="porsi"
                    checked={Data.porsi === item.value}
                    onChange={() => setData({ ...Data, porsi: item.value })}
                  />
                  <label className="form-check-label">{item.text}</label>
                </div>
              ))}
            </div>
            <hr />
            <div className="form-group">
              <label className="text-light">Pilih Minuman</label>
              <select
                className="form-control"
                value={Data.MenuMin}
                onChange={(e) => setData({ ...Data, MenuMin: e.target.value })}
              >
                <option value="" disabled selected>
                  Pilih menu minuman
                </option>
                {MenuMinuman.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.text}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-light">Jumlah Minuman</label>
              <input
                type="number"
                value={Data.JumlahMin}
                onChange={(e) =>
                  setData({ ...Data, JumlahMin: e.target.value })
                }
                className="form-control"
                placeholder="Jumlah Minuman"
                id="Data-jumlahmin"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div>
              <label className="text-light">No Hp</label>
              <input
                type="text"
                value={Data.NoHp}
                onChange={(e) => setData({ ...Data, NoHp: e.target.value })}
                className="form-control"
                placeholder="Masukkan No Hp"
                id="Data-NoHp"
              />
            </div>
            <div className="form-group">
              <label className="text-light">Keterangan</label>
              <textarea
                className="form-control"
                rows="6"
                placeholder="Tambahkan keterangan"
                value={Data.description}
                onChange={(e) =>
                  setData({ ...Data, description: e.target.value })
                }
              ></textarea>
            </div>
            <hr />
            <div className="form-group">
              <label className="text-light">Pembayaran--</label>
              {Temps.map((item) => (
                <div key={item.value} className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={item.value}
                    checked={Data.Temp.includes(item.value)}
                    onChange={(e) =>
                      handleTempChange(item.value, e.target.checked)
                    }
                  />
                  <label className="form-check-label text-light">{item.text}</label>
                </div>
              ))}
            </div>
            <hr />
            <div className="form-group">
              <label className="text-light">Punya kartu member ?</label>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="kartuMember"
                    value="1"
                    checked={Data.Ketentuan === "1"}
                    onChange={() => setData({ ...Data, Ketentuan: "1" })}
                  />
                  <label className="form-check-label">Ya</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="kartuMember"
                    value="0"
                    checked={Data.Ketentuan === "0"}
                    onChange={() => setData({ ...Data, Ketentuan: "0" })}
                  />
                  <label className="form-check-label">Tidak</label>
                </div>
              </div>
            </div>
            <hr />
            <div className="form-group">
              <label className="text-light">Simpan</label>
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={Data.Simpan}
                    checked={Data.Simpan}
                    onChange={(e) =>
                      setData({ ...Data, Simpan: e.target.checked })
                    }
                    id="simpan"
                  />
                  <label className="form-check-label">Yes</label>
                </div>
              </div>
            </div>
            <hr />
            <div className="form-group">
              <button
                className="btn btn-lg btn-primary rounded-pill px-5"
                onClick={saveData}
              >
                Tambah Keranjang
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container bg-light rounded-lg shadow-lg">
        <h3 className="border-bottom text-center">Keranjang Anda</h3>
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="bg-info text-light">
              <tr>
                <th className="text-center">No</th>
                <th className="text-center">Nama Pemesan</th>
                <th className="text-center">No Hp/WA</th>
                <th className="text-center">Makanan</th>
                <th className="text-center">Jumlah Makanan</th>
                <th className="text-center">Porsi</th>
                <th className="text-center">Minuman</th>
                <th className="text-center">Jumlah Minuman</th>
                <th className="text-center">Keterangan</th>
                <th className="text-center">Pembayaran</th>
                <th className="text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataList.map((item, index) => (
                <tr key={index}>
                  <td className="text-center">{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.NoHp}</td>
                  <td>
                    {
                      MenuMakanan.find((menu) => menu.value === item.MenuM)
                        ?.text
                    }
                  </td>
                  <td className="text-center">{item.JumlahM}</td>
                  <td className="text-center">
                    {porsi.find((p) => p.value === item.porsi)?.text}
                  </td>
                  <td>
                    {
                      MenuMinuman.find((menu) => menu.value === item.MenuMin)
                        ?.text
                    }
                  </td>
                  <td className="text-center">{item.JumlahMin}</td>
                  <td>{item.description}</td>
                  <td className="text-center">
                    {item.Temp.map(
                      (temp) => Temps.find((t) => t.value === temp)?.text
                    ).join(", ")}
                  </td>
                  <td className="text-center">
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => edit(item)}
                    >
                      Edit
                    </button>{" "}
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => del(item)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center mb-3">
          <button className="btn btn-lg btn-success" onClick={save}>
            Pesan
          </button>
        </div>
      </div>
    </>
  );
};

export default FormPemesanan;
