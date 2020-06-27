const fs = require('fs')

let preguntasFrecuentes= {
    titulo:"Preguntas Frecuentes",
    bd:"./data/faqs.json",
    leerJSON: function() {
        let faqsJson = fs.readFileSync(this.bd, 'utf-8');
        let pregFrec = JSON.parse(faqsJson);
        return pregFrec
    },
    totalDePreguntas: function(){
        return this.leerJSON().total_faqs
 
    },
    listadoPreguntas: function(){
        let preg = this.leerJSON();
        let todosLasFaqs =[]

            preg.faqs.forEach(function(faq){
                todosLasFaqs.push(`
                
                Pregunta : ${faq.faq_title}
                
                Respuesta:${faq.faq_answer}
    
                `)
                //return todosLasFaqs
            })
            return todosLasFaqs
        
    },
    
}
module.exports=preguntasFrecuentes