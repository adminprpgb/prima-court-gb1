export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-4">
      <h1 className="text-4xl font-bold mb-4">Selamat datang ke PRIMA COURT GB 1</h1>
      <p className="text-lg mb-6">Sila pilih gelanggang dan masa untuk membuat tempahan anda.</p>
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600">Court A</button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600">Court B</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600">Court C</button>
      </div>
    </div>
  );
}
