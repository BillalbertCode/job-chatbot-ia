// The Home Page
// Components
import ChatbotComponent from "../components/ChatbotComponent";
// Icons
import { SiGooglegemini } from "react-icons/si";
// Styles
import stylesCss from "@/styles/figure.module.css"

export default function Home() {
  return (
    <>
      <section id="Hero" className="mb-16 text-wrap">
        <div className="flex items-center justify-center flex-col sm:flex-row">
          <h1 className="textbg1 tracking-wide text-center text-6xl font-extrabold mb-0 sm:mb-2 ">
            Job Chatbot <span>IA</span>
          </h1>
          <div className="relative flex p-4 h-16">
            <SiGooglegemini className={`${stylesCss.starIA} sm:absolute bottom-3 left-0 text-xl`} />
            <SiGooglegemini className={`${stylesCss.starIA} sm:absolute sm:text-xl`} />
            <SiGooglegemini className={`${stylesCss.starIA} sm:absolute top-10 text-xl`} />
          </div>
        </div>
        <article className="max-w-4xl relative">
          <div className={`absolute top-100 right-0 z-n1 rounded h-24 w-32 ${stylesCss.bgFigure2}`}>
          </div>
          <p className="font-medium text-xl text-gray-600 text-center">
            Chatbot Inteligente enfocado en la asistencia de Trabajo, con uso interactivo de Herramientas.
            creado con el <a className="font-bold underline decoration-sky-500 hover:decoration-blue-300 decoration-2" href="https://deepmind.google/technologies/gemini/">LLM Gemini</a> y <a className="font-bold underline decoration-slate-500 hover:decoration-slate-700 decoration-2" href="https://sdk.vercel.ai/">IA SDK</a> para facilicitar la creacion del chatbot.
          </p>
        </article>
      </section>
      <ChatbotComponent />
    </>
  );
}
