// File: pages/index.js

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center">
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-700 mb-6">
        <Image
          src="/profile.jpg"
          alt="Vikram KK"
          width={128}
          height={128}
          className="object-cover"
        />
      </div>

      <h1 className="text-4xl font-semibold mb-2 text-center">
        Vikram KK
      </h1>
      <p className="text-lg text-gray-400 mb-8 text-center max-w-xl">
        DevOps Engineer | CI/CD Automation | Cloud Infrastructure | Kubernetes | Terraform | AWS
      </p>

      <div className="flex space-x-4">
        <Link href="/projects" className="bg-white text-black px-6 py-2 rounded-xl font-medium hover:bg-gray-200 transition">
          View Projects
        </Link>
        <a
          href="mailto:vikramkk800@gmail.com"
          className="border border-gray-400 px-6 py-2 rounded-xl text-white hover:bg-gray-800 transition"
        >
          Contact Me
        </a>
      </div>
    </main>
  )
}
