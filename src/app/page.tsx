import { SiGooglegemini } from "react-icons/si";
import ChatbotComponent from "../components/ChatbotComponent";

export default function Home() {
  return (
    <main className="flex h-screen min-h-screen flex-col items-center p-16">
      <section id="Hero" className="mb-16 text-wrap w-9/12 max-w-4xl">
        <div className="flex items-center justify-center">
          <h1 className="textbg1 tracking-wide text-center text-6xl font-extrabold mb-2">
            Job Chatbot <span>IA</span>
          </h1>
          <div className="relative p-4 h-16">
            <SiGooglegemini className="multicolorIA absolute bottom-3 left-0 text-xl" />
            <SiGooglegemini className="multicolorIA absolute bottom-50 left-50 text-xl" />
            <SiGooglegemini className="multicolorIA absolute top-10 left-100 text-xl" />
          </div>
        </div>
        <div className="relative">
          <div className="absolute top-100 right-0 z-n1 rounded h-24 w-32 bgFigure2">
          </div>
          <p className="font-medium text-xl text-gray-600 text-center">
            Chatbot Inteligente enfocado en la asistencia de Trabajo, con uso interactivo de Herramientas.
            creado con el <a className="font-bold underline decoration-sky-500 hover:decoration-blue-300 decoration-2" href="https://deepmind.google/technologies/gemini/">LLM Gemini</a> y <a className="font-bold underline decoration-slate-500 hover:decoration-slate-700 decoration-2" href="https://sdk.vercel.ai/">IA SDK</a> para facilicitar la creacion del chatbot.
          </p>
        </div>
        <div className="absolute rounded top-0 right-20 h-16 w-16 bgFigure1">
        </div>
        <div className="absolute rounded top-0 left-20 h-16 w-16 bgFigure1">
        </div>
      </section>
      <ChatbotComponent />

    </main>
  );
}
