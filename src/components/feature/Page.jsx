import {
   SparklesIcon,
   DocumentIcon,
   BoltIcon,
   UserIcon,
   ArrowTrendingUpIcon,
   ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

const features = [
   {
      name: "ZEN AI for Natural Language Understanding",
      description:
         "ZEN AI menggunakan teknologi canggih dari OpenAI untuk memahami dan merespons bahasa manusia dengan akurasi tinggi. Fitur ini memungkinkan aplikasi untuk melakukan analisis teks, pengenalan pola, dan pemrosesan bahasa alami secara efektif.",
      icon: SparklesIcon,
   },
   {
      name: "ZEN AI for Content Generation",
      description:
         "ZEN AI memanfaatkan kecerdasan buatan untuk menghasilkan konten secara otomatis berdasarkan input atau parameter yang diberikan. Dengan ZEN AI, Anda dapat membuat artikel, laporan, dan materi konten lainnya dengan cepat dan efisien.",
      icon: DocumentIcon,
   },
   {
      name: "ZEN AI for Smart Automation",
      description:
         "ZEN AI menyediakan alat otomatisasi cerdas yang dapat membantu dalam penjadwalan tugas, manajemen data, dan optimisasi proses bisnis. Fitur ini menggunakan AI untuk meningkatkan produktivitas dan efisiensi operasional.",
      icon: BoltIcon,
   },
   {
      name: "ZEN AI for Personalization",
      description:
         "Dengan ZEN AI, Anda dapat menyediakan pengalaman yang dipersonalisasi untuk pengguna berdasarkan preferensi dan perilaku mereka. AI membantu dalam merekomendasikan konten.",
      icon: UserIcon,
   },
   {
      name: "Real-time Analytics",
      description:
         "Melihat dan menganalisis data secara real-time untuk memahami performa aplikasi dan mengambil keputusan berdasarkan informasi yang terbaru.",
      icon: ArrowTrendingUpIcon,
   },
   {
      name: "Monitoring and Alerts",
      description:
         "Memantau kinerja aplikasi dan memberikan pemberitahuan atau alert secara otomatis jika terdeteksi adanya masalah atau anomali dalam sistem.",
      icon: ComputerDesktopIcon,
   },
];

export default function Example() {
   return (
      <div className="bg-white py-24 sm:py-32">
         <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
               <h2 className="text-base font-semibold leading-7 text-indigo-600">
                  AI Berbasis OpenAI
               </h2>
               <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Materi Mepet deadline? Chat ZEN AI saja
               </p>
               <p className="mt-6 text-lg leading-8 text-gray-600">
                  AI (Artificial Intelligence) adalah teknologi yang
                  memungkinkan komputer untuk belajar dari data, mengenali pola,
                  dan membuat keputusan seperti manusia. Ini digunakan dalam
                  berbagai aplikasi seperti pengenalan suara, pengenalan gambar,
                  dan pemrosesan bahasa alami, meningkatkan efisiensi dan
                  inovasi di berbagai sektor
               </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
               <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                  {features.map((feature) => (
                     <div key={feature.name} className="relative pl-16">
                        <dt className="text-base font-semibold leading-7 text-gray-900">
                           <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                              <feature.icon
                                 className="h-6 w-6 text-white"
                                 aria-hidden="true"
                              />
                           </div>
                           {feature.name}
                        </dt>
                        <dd className="mt-2 text-base leading-7 text-gray-600">
                           {feature.description}
                        </dd>
                     </div>
                  ))}
               </dl>
            </div>
         </div>
      </div>
   );
}
