function OrderPage() {
  return (
    <div className="grid lg:grid-cols-[1fr_3fr] grid-cols-1 gap-8 2xl:max-w-[90rem] lg:max-w-[60rem] md:max-w-[47.5rem] w-full md:mx-auto md:mt-12 mt-8">
      <div className="bg-[#e7e7ea] flex flex-col gap-8 py-8 px-12 rounded-md shadow-xl h-fit">
        <div className="flex flex-col text-center">
          <img
            src="./assets/img/games/zbesf2fit6qz3s6tkbf3.webp"
            alt=""
            className="md:w-[20rem] rounded-lg shadow-lg mb-4 md:mx-auto"
          />
          <p className="font-bold text-base">S1A</p>
          <p className="font-bold md:text-3xl">Mobile Legends</p>
          <ul className="flex flex-col gap-2  mt-4 text-md font-semibold">
            <li>Jaminan Layanan</li>
            <li>Layanan Pelanggan 24/7</li>
            <li>Pembayaran yang Aman</li>
            <li>Pengiriman Instant</li>
            <li> Pengiriman Manual</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold md:text-3xl text-center">Cara Top Up</h2>
          <ul className="flex flex-col gap-2 font-semibold mt-4">
            <li>
              1. Masukkan User ID dan Zone ID Anda, Contoh : 1234567 (1234)
            </li>
            <li>2. Pilih Nominal Diamonds yang kamu inginkan</li>
            <li>3. Selesaikan pembayaran</li>
            <li>4. Diamonds akan ditambahkan ke akun Mobile Legends kamu</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold md:text-3xl text-center">Note</h2>
          <p className="font-semibold mt-4">
            Pembelian Weekly maksimal 10X atau 70 Hari (lebih dari itu weekly
            tidak masuk atau hangus)
          </p>
        </div>
      </div>

      <div className="flex flex-col ">
        <div className="flex flex-col gap-4">
          <div className="bg-[#e7e7ea] rounded-md shadow-lg">
            <div className="bg-[#ced0d5] py-2 px-4 rounded-t-md">
              <h2 className="font-semibold">Masukkan Data Akun</h2>
            </div>
            <div className="flex md:flex-nowrap flex-wrap gap-4 py-2 px-4 my-4">
              <input
                type="number"
                className="bg-gray-300 p-4 md:flex-[0_1_50%] md:w-fit w-full rounded-lg "
                placeholder="Masukan ID"
              />

              <input
                type="number"
                className="bg-gray-300 p-4 md:flex-[0_1_50%] md:w-fit w-full rounded-lg"
                placeholder="Masukan Server "
              />
            </div>
          </div>

          <div className="bg-[#e7e7ea] rounded-md shadow-lg">
            <div className="bg-[#ced0d5] py-2 px-4 rounded-t-md">
              <h2 className="font-semibold">Pilih Produk</h2>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 py-2 px-4 my-4">
              <div className="transition-all duration-300 bg-[#69B3F5] p-4 rounded-lg cursor-pointer hover:bg-[#5fa1dd] hover:scale-95">
                <p className="font-semibold text-lg">Weekly Diamond Pass</p>
                <p className="font-semibold text-lg">Rp. 21.799,00</p>
              </div>
              <div className="transition-all duration-300 bg-[#69B3F5] p-4 rounded-lg cursor-pointer hover:bg-[#5fa1dd] hover:scale-95">
                <p className="font-semibold text-lg">Weekly Diamond Pass</p>
                <p className="font-semibold text-lg">Rp. 21.799,00</p>
              </div>
              <div className="transition-all duration-300 bg-[#69B3F5] p-4 rounded-lg cursor-pointer hover:bg-[#5fa1dd] hover:scale-95">
                <p className="font-semibold text-lg">Weekly Diamond Pass</p>
                <p className="font-semibold text-lg">Rp. 21.799,00</p>
              </div>
              <div className="transition-all duration-300 bg-[#69B3F5] p-4 rounded-lg cursor-pointer hover:bg-[#5fa1dd] hover:scale-95">
                <p className="font-semibold text-lg">Weekly Diamond Pass</p>
                <p className="font-semibold text-lg">Rp. 21.799,00</p>
              </div>
              <div className="transition-all duration-300 bg-[#69B3F5] p-4 rounded-lg cursor-pointer hover:bg-[#5fa1dd] hover:scale-95">
                <p className="font-semibold text-lg">Weekly Diamond Pass</p>
                <p className="font-semibold text-lg">Rp. 21.799,00</p>
              </div>
              <div className="transition-all duration-300 bg-[#69B3F5] p-4 rounded-lg cursor-pointer hover:bg-[#5fa1dd] hover:scale-95">
                <p className="font-semibold text-lg">Weekly Diamond Pass</p>
                <p className="font-semibold text-lg">Rp. 21.799,00</p>
              </div>
              <div className="transition-all duration-300 bg-[#69B3F5] p-4 rounded-lg cursor-pointer hover:bg-[#5fa1dd] hover:scale-95">
                <p className="font-semibold text-lg">Weekly Diamond Pass</p>
                <p className="font-semibold text-lg">Rp. 21.799,00</p>
              </div>
              <div className="transition-all duration-300 bg-[#69B3F5] p-4 rounded-lg cursor-pointer hover:bg-[#5fa1dd] hover:scale-95">
                <p className="font-semibold text-lg">Weekly Diamond Pass</p>
                <p className="font-semibold text-lg">Rp. 21.799,00</p>
              </div>
              <div className="transition-all duration-300 bg-[#69B3F5] p-4 rounded-lg cursor-pointer hover:bg-[#5fa1dd] hover:scale-95">
                <p className="font-semibold text-lg">Weekly Diamond Pass</p>
                <p className="font-semibold text-lg">Rp. 21.799,00</p>
              </div>
              <div className="transition-all duration-300 bg-[#69B3F5] p-4 rounded-lg cursor-pointer hover:bg-[#5fa1dd] hover:scale-95">
                <p className="font-semibold text-lg">Weekly Diamond Pass</p>
                <p className="font-semibold text-lg">Rp. 21.799,00</p>
              </div>
              <div className="transition-all duration-300 bg-[#69B3F5] p-4 rounded-lg cursor-pointer hover:bg-[#5fa1dd] hover:scale-95">
                <p className="font-semibold text-lg">Weekly Diamond Pass</p>
                <p className="font-semibold text-lg">Rp. 21.799,00</p>
              </div>
              <div className="transition-all duration-300 bg-[#69B3F5] p-4 rounded-lg cursor-pointer hover:bg-[#5fa1dd] hover:scale-95">
                <p className="font-semibold text-lg">Weekly Diamond Pass</p>
                <p className="font-semibold text-lg">Rp. 21.799,00</p>
              </div>
              <div className="transition-all duration-300 bg-[#69B3F5] p-4 rounded-lg cursor-pointer hover:bg-[#5fa1dd] hover:scale-95">
                <p className="font-semibold text-lg">Weekly Diamond Pass</p>
                <p className="font-semibold text-lg">Rp. 21.799,00</p>
              </div>
              <div className="transition-all duration-300 bg-[#69B3F5] p-4 rounded-lg cursor-pointer hover:bg-[#5fa1dd] hover:scale-95">
                <p className="font-semibold text-lg">Weekly Diamond Pass</p>
                <p className="font-semibold text-lg">Rp. 21.799,00</p>
              </div>
              <div className="transition-all duration-300 bg-[#69B3F5] p-4 rounded-lg cursor-pointer hover:bg-[#5fa1dd] hover:scale-95">
                <p className="font-semibold text-lg">Weekly Diamond Pass</p>
                <p className="font-semibold text-lg">Rp. 21.799,00</p>
              </div>
              <div className="transition-all duration-300 bg-[#69B3F5] p-4 rounded-lg cursor-pointer hover:bg-[#5fa1dd] hover:scale-95">
                <p className="font-semibold text-lg">Weekly Diamond Pass</p>
                <p className="font-semibold text-lg">Rp. 21.799,00</p>
              </div>
              <div className="transition-all duration-300 bg-[#69B3F5] p-4 rounded-lg cursor-pointer hover:bg-[#5fa1dd] hover:scale-95">
                <p className="font-semibold text-lg">Weekly Diamond Pass</p>
                <p className="font-semibold text-lg">Rp. 21.799,00</p>
              </div>
              <div className="transition-all duration-300 bg-[#69B3F5] p-4 rounded-lg cursor-pointer hover:bg-[#5fa1dd] hover:scale-95">
                <p className="font-semibold text-lg">Weekly Diamond Pass</p>
                <p className="font-semibold text-lg">Rp. 21.799,00</p>
              </div>
              <div className="transition-all duration-300 bg-[#69B3F5] p-4 rounded-lg cursor-pointer hover:bg-[#5fa1dd] hover:scale-95">
                <p className="font-semibold text-lg">Weekly Diamond Pass</p>
                <p className="font-semibold text-lg">Rp. 21.799,00</p>
              </div>
              <div className="transition-all duration-300 bg-[#69B3F5] p-4 rounded-lg cursor-pointer hover:bg-[#5fa1dd] hover:scale-95">
                <p className="font-semibold text-lg">Weekly Diamond Pass</p>
                <p className="font-semibold text-lg">Rp. 21.799,00</p>
              </div>
              <div className="transition-all duration-300 bg-[#69B3F5] p-4 rounded-lg cursor-pointer hover:bg-[#5fa1dd] hover:scale-95">
                <p className="font-semibold text-lg">Weekly Diamond Pass</p>
                <p className="font-semibold text-lg">Rp. 21.799,00</p>
              </div>
              <div className="transition-all duration-300 bg-[#69B3F5] p-4 rounded-lg cursor-pointer hover:bg-[#5fa1dd] hover:scale-95">
                <p className="font-semibold text-lg">Weekly Diamond Pass</p>
                <p className="font-semibold text-lg">Rp. 21.799,00</p>
              </div>
              <div className="transition-all duration-300 bg-[#69B3F5] p-4 rounded-lg cursor-pointer hover:bg-[#5fa1dd] hover:scale-95">
                <p className="font-semibold text-lg">Weekly Diamond Pass</p>
                <p className="font-semibold text-lg">Rp. 21.799,00</p>
              </div>
              <div className="transition-all duration-300 bg-[#69B3F5] p-4 rounded-lg cursor-pointer hover:bg-[#5fa1dd] hover:scale-95">
                <p className="font-semibold text-lg">Weekly Diamond Pass</p>
                <p className="font-semibold text-lg">Rp. 21.799,00</p>
              </div>
            </div>
          </div>

          <div className="bg-[#e7e7ea] rounded-md shadow-lg">
            <div className="bg-[#ced0d5] py-2 px-4 rounded-t-md">
              <h2 className="font-semibold">Pilih Pembayaran</h2>
            </div>

            <div className="flex flex-col py-2 px-4 mt-4 mx-4">
              <h3 className="bg-[#ced0d5] font-semibold text-lg rounded-t-md py-2 px-4">
                QRIS
              </h3>
              <div className="bg-[#b6b8bf] flex  flex-warp gap-4 rounded-b-md py-4 px-8">
                <div className="transition-all duration-300 bg-[#ddfbd2] p-4 rounded-lg cursor-pointer hover:bg-[#9bb093] hover:scale-95 w-fit">
                  <p className="font-semibold md:text-lg sm:text-base">
                    Metode Pembayaran X
                  </p>
                  <p className="font-semibold md:text-lg sm:text-base">
                    Rp. XXXX.XXXX.XXXX,XX
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col py-2 px-4 mt-4 mx-4">
              <h3 className="bg-[#ced0d5] font-semibold text-lg rounded-t-md py-2 px-4">
                Convenince Store
              </h3>
              <div className="bg-[#b6b8bf] flex flex-wrap gap-4 rounded-b-md py-4 px-8">
                <div className="transition-all duration-300 bg-[#ddfbd2] p-4 rounded-lg cursor-pointer hover:bg-[#9bb093] hover:scale-95 w-fit">
                  <p className="font-semibold md:text-lg sm:text-base">
                    Metode Pembayaran X
                  </p>
                  <p className="font-semibold md:text-lg sm:text-base">
                    Rp. XXXX.XXXX.XXXX,XX
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col py-2 px-4 mt-4 mx-4">
              <h3 className="bg-[#ced0d5] font-semibold text-lg rounded-t-md py-2 px-4">
                E-Wallet
              </h3>
              <div className="bg-[#b6b8bf] flex flex-wrap gap-4 rounded-b-md py-4 px-8">
                <div className="transition-all duration-300 bg-[#ddfbd2] p-4 rounded-lg cursor-pointer hover:bg-[#9bb093] hover:scale-95 w-fit">
                  <p className="font-semibold md:text-lg sm:text-base">
                    Metode Pembayaran X
                  </p>
                  <p className="font-semibold md:text-lg sm:text-base">
                    Rp. XXXX.XXXX.XXXX,XX
                  </p>
                </div>
                <div className="transition-all duration-300 bg-[#ddfbd2] p-4 rounded-lg cursor-pointer hover:bg-[#9bb093] hover:scale-95 w-fit">
                  <p className="font-semibold md:text-lg sm:text-base">
                    Metode Pembayaran X
                  </p>
                  <p className="font-semibold md:text-lg sm:text-base">
                    Rp. XXXX.XXXX.XXXX,XX
                  </p>
                </div>
                <div className="transition-all duration-300 bg-[#ddfbd2] p-4 rounded-lg cursor-pointer hover:bg-[#9bb093] hover:scale-95 w-fit">
                  <p className="font-semibold md:text-lg sm:text-base">
                    Metode Pembayaran X
                  </p>
                  <p className="font-semibold md:text-lg sm:text-base">
                    Rp. XXXX.XXXX.XXXX,XX
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col py-2 px-4 mt-4 mx-4">
              <h3 className="bg-[#ced0d5] font-semibold text-lg rounded-t-md py-2 px-4">
                Bank
              </h3>
              <div className="bg-[#b6b8bf] flex flex-wrap gap-4 rounded-b-md py-4 px-8 mb-4">
                <div className="transition-all duration-300 bg-[#ddfbd2] p-4 rounded-lg cursor-pointer hover:bg-[#9bb093] hover:scale-95 w-fit">
                  <p className="font-semibold md:text-lg sm:text-base">
                    Metode Pembayaran X
                  </p>
                  <p className="font-semibold md:text-lg sm:text-base">
                    Rp. XXXX.XXXX.XXXX,XX
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#e7e7ea] rounded-md shadow-lg">
            <div className="bg-[#ced0d5] py-2 px-4 rounded-t-md ">
              <h2 className="font-semibold">Kode Promo</h2>
            </div>
            <div className="flex justify-center md:flex-nowrap flex-wrap gap-4 py-2 px-4">
              <input
                type="text"
                className="bg-gray-300 p-4 md:flex-[0_1_80%] rounded-lg md:w-fit w-full"
                placeholder="Masukan Kode Promo "
              />
              <button className="md:flex-[0_1_20%] transition-all duration-300 bg-[#5fa1dd] hover:bg-[#4a7dac] font-semibold text-xl py-4 px-8 rounded-lg md:w-fit w-full">
                Apply Code
              </button>
            </div>
          </div>

          <div className="bg-[#e7e7ea] rounded-md shadow-lg">
            <div className="bg-[#ced0d5] py-2 px-4 rounded-t-md">
              <h2 className="font-semibold">Nomor Whatsapp</h2>
            </div>
            <div className="flex flex-col py-2 px-4">
              <input
                type="text"
                className="bg-gray-300 p-4 flex-[1_0_80%] rounded-lg"
                placeholder="+62 "
              />
              <p className="mt-2">
                Nomor Whatsapp yang dapat dihubungi apabila ada masalah
              </p>
            </div>
          </div>

          <button className="transition-all duration-300 bg-[#5fa1dd] hover:bg-[#4a7dac] font-semibold text-xl py-4 px-8 rounded-lg">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
