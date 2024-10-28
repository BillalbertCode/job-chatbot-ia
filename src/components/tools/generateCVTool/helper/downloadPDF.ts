// Descargar en formato PDF
// Recibimos la referencia del elemento para asi poder descargarlo
import jsPDF from "jspdf"
import { RefObject } from "react";

const downloadPDF = (refElement: RefObject<HTMLElement>): void => {

    try {
        // Obtenemos el elemento que vamos a pasar a pdf
        const doc = new jsPDF()
        const element = refElement.current

        if (!element) {
            console.error("El elemento de referencia es nulo");
            return;
        }

        // Obtenemos el nombre 
        const texto = element.textContent || "";
        const palabras = texto.split(" ");
        const primerasDosPalabras = palabras.slice(0, 2).join("");


        doc.html(element, {
            callback: function (pdf) {
                pdf.save(primerasDosPalabras)
            },
            x: 10,
            y: 0,
            html2canvas: {
                scale: 0.20,
                useCORS: true,
                logging: true

            }
        })
    } catch (error) {
        console.error('Error generating PDF:', error)
    }

}

export default downloadPDF