import Calculator from "@/components/Calculator";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">計算機</h1>
        <p className="text-gray-600">簡潔、快速、精確的計算工具</p>
      </div>
      <main>
        <Calculator />
      </main>
    </div>
  );
}
