import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import stylesFigure from "@/styles/figure.module.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job Chatbot IA",
  description: "Chatbot inteligente enfocado en la asistencia de trabajo, con uso interactivo de herramientas para ayudar a los usuarios con distintas tareas.",
  keywords: ["Job Chatbot IA", "Asistente de trabajo IA", "Chatbot asistente de trabajo", "Work Chatbot"],
  creator: "BillalbertCode",
  authors: [{ name: "Billalbert Martinez", url: "https://bill.caribito.com/bill/" }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen relative container mx-auto flex-col items-center p-4 sm:p-16">
          {children}
          <div className={`absolute rounded top-0 right-40 h-16 w-16 ${stylesFigure.bgFigure1}`}>
          </div>
          <div className={`absolute rounded top-0 left-20 h-16 w-16 ${stylesFigure.bgFigure1}`}>
          </div>
        </main>
        <footer className="bg-slate-800 py-6">
          <div className="container mx-auto px-4 text-center">
            <p className="text-white mb-4">
              © {new Date().getFullYear()} Job Chatbot. Todos los derechos reservados.
            </p>
            <div className="w-full grid sm:grid-cols-4 sm:gap-4 gap-6" >
              <div className="sm:text-start text-center text-slate-300">
                <h5 className="text-base text-slate-200 font-bold">Información sobre el proyecto.</h5>
                <p > 
                  Este proyecto es un chatbot inteligente que selecciona herramientas adecuadas basadas en el contexto de la conversación, detectando automáticamente cambios en el tono y ajustando la interfaz de usuario según la herramienta activa.
                </p>
                <a href="https://github.com/billalbertcode/job-chatbot-ia" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 after:content-['_↗']">
                  GitHub
                </a>
                <br /> <br />
                <h5 className="text-base text-slate-200 font-bold">Creditos Técnicos</h5>
                <p >Powered by LLM Gemini and IA SDK</p>
                <p >Built with Tailwind CSS and NextJS</p>
              </div>
              <div className="sm:text-start text-center text-slate-300">
                <h5 className="text-base text-slate-200 font-bold">Redes Sociales</h5>
                <div className="flex sm:justify-start justify-center gap-4">
                  <ul>
                    <li>
                      <a href="https://bill.caribito.com/bill/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                        Portfolio
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/billalbertcode" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/billalbertcode" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                        GitHub
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/billalbertcode" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                        Instagram
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="https://threads.com/billalbertcode" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                        Threads
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/billalbertcode" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                        X (Twitter)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sm:text-start text-center text-slate-300" >
                <h5 className="text-base text-slate-200 font-bold">Información de contacto.</h5>
                <p>Cualquier información de feedback o requerimiento de mis servicios, contactame.</p>
                <a className="hover:text-slate-200" href="mailto:billalbertcode@gmail.com" >billalbertcode@gmail.com</a>
                <br /><br />
                <p>Otros Proyectos en: <a href="https://bill.caribito.com/bill/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 after:content-['_↗']">
                  Portfolio</a>
                </p>
              </div>
              <div className="sm:text-start text-center text-slate-300">
                <h5 className="text-base text-slate-200 font-bold">Copyright y Legalidades</h5>
                <ul>
                  <li>
                    <a href="/terms-of-service" className="text-blue-400 hover:text-blue-300">
                      Términos de Servicio
                    </a>
                  </li>
                  <li>
                    <a href="/privacy-policy" className="text-blue-400 hover:text-blue-300">
                      Política de Privacidad
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
