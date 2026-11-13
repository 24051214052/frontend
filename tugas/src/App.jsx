
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // State untuk menyimpan data mahasiswa
  const [mahasiswa] = useState([
    {
      nim: "24051214052",
      nama: "Muh. Khalil Putra Amansyah",
      noHp: "083139041204",
      email: "khalilputra06@gmail.com",
      alamat: "Surabaya",
      prodi: "Sistem Informasi",
      tahunMasuk: "2024",
    },
    {
      nim: "24051214070",
      nama: "Dimas Albi",
      noHp: "0831485732009",
      email: "dimasalbi@gmail.com",
      alamat: "Sidoarjo",
      prodi: "Sistem Informasi",
      tahunMasuk: "2024",
    },
    {
      nim: "24051214051",
      nama: "Zulfa Ananta Purwanto",
      noHp: "08123234857",
      email: "zulfananta@gmail.com",
      alamat: "Tulungagung",
      prodi: "Sistem Informasi",
      tahunMasuk: "2024",
    },
    {
      nim: "24051214066",
      nama: "Ainurrohman Prayoga",
      noHp: "082924852021",
      email: "ainurrohman@gmail.com",
      alamat: "Surabaya",
      prodi: "Sistem Informasi",
      tahunMasuk: "2024",
    },
    {
      nim: "24051214061",
      nama: "Rayhan Ijaz Mawla",
      noHp: "085129483572",
      email: "rayhanijaz@gmail.com",
      alamat: "Madiun",
      prodi: "Sistem Informasi",
      tahunMasuk: "2024",
    },
  ]);

  // State untuk menyimpan waktu saat ini
  const [waktu, setWaktu] = useState(new Date());

  // useEffect untuk menjalankan jam digital
  useEffect(() => {
    const interval = setInterval(() => {
      setWaktu(new Date());
    }, 1000);

    // Cleanup interval ketika komponen di-unmount
    return () => clearInterval(interval);
  }, []);

  // Format waktu digital
  const jamDigital = waktu.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const tanggal = waktu.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">SM</div>
          <div>
            <h1>Student Management</h1>
            <p>Dashboard Data Mahasiswa</p>
          </div>
        </div>
        <span className="header-badge">ADMIN PANEL</span>
      </header>

      <main className="main-content">
        {/* Subheader */}
        <section className="page-heading">
          <div>
            <h2>Daftar Data Mahasiswa</h2>
            <p>Informasi lengkap mahasiswa yang terdaftar.</p>
          </div>
        </section>

        {/* Informasi dan Jam Digital */}
        <section className="info-section">
          <div className="info-card">
            <div className="card-icon">👨‍🎓</div>
            <div>
              <p>Total Mahasiswa</p>
              <h3>{mahasiswa.length}</h3>
              <span>Mahasiswa terdaftar</span>
            </div>
          </div>

          <div className="clock-card">
            <div className="clock-icon">🕒</div>
            <div>
              <p>Waktu Sekarang</p>
              <h3>{jamDigital}</h3>
              <span>{tanggal}</span>
            </div>
          </div>
        </section>

        {/* Tabel Mahasiswa */}
        <section className="table-section">
          <div className="table-header">
            <div>
              <h3>Data Mahasiswa</h3>
              <p>Daftar seluruh mahasiswa</p>
            </div>
            <span className="total-badge">
              {mahasiswa.length} Data
            </span>
          </div>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>NIM</th>
                  <th>Nama Mahasiswa</th>
                  <th>No. HP</th>
                  <th>Email</th>
                  <th>Alamat</th>
                  <th>Program Studi</th>
                  <th>Tahun Masuk</th>
                </tr>
              </thead>

              <tbody>
                {mahasiswa.map((mhs) => (
                  <tr key={mhs.nim}>
                    <td className="nim">{mhs.nim}</td>
                    <td className="nama">{mhs.nama}</td>
                    <td>{mhs.noHp}</td>
                    <td>{mhs.email}</td>
                    <td>{mhs.alamat}</td>
                    <td>
                      <span className="prodi-badge">
                        {mhs.prodi}
                      </span>
                    </td>
                    <td>{mhs.tahunMasuk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="table-footer">
            Menampilkan {mahasiswa.length} data mahasiswa
          </div>
        </section>

        {/* Footer */}
        <footer>
          Student Management © 2026 | ReactJS Hooks Practice
        </footer>
      </main>
    </div>
  );
}

export default App;
