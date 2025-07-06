export default function EducationPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 border-b border-gray-700 pb-2">Education</h1>

        {/* B.Tech */}
        <div className="bg-gray-900 rounded-xl p-6 shadow-lg mb-6">
          <h2 className="text-2xl font-semibold">Indira Gandhi Delhi Technical University for Women</h2>
          <p className="text-gray-400 text-sm mb-2">Delhi, India</p>
          <p className="text-gray-300 mb-1">B.Tech in Information Technology</p>
          <p className="text-gray-400 text-sm">Jan 2021 – May 2024</p>
          <p className="text-gray-200 mt-2">CGPA: <span className="font-medium">9.12</span></p>
        </div>

        {/* 12th */}
        <div className="bg-gray-900 rounded-xl p-6 shadow-lg mb-6">
          <h2 className="text-2xl font-semibold">Chand Ram Public School</h2>
          <p className="text-gray-400 text-sm mb-2">Narela, Delhi</p>
          <p className="text-gray-300 mb-1">CBSE – Senior Secondary (12th)</p>
          <p className="text-gray-400 text-sm">2018 – 2020</p>
        </div>

        {/* 10th */}
        <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold">Model School</h2>
          <p className="text-gray-400 text-sm mb-2">Rohtak, Haryana</p>
          <p className="text-gray-300 mb-1">CBSE – Secondary (10th)</p>
          <p className="text-gray-400 text-sm">2017 – 2018</p>
        </div>
      </div>
    </div>
  );
}
