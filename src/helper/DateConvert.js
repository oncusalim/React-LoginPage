import { format as formatDate, parseISO } from 'date-fns'


export const DateConvert=(date)=> {
    
    return date ?  formatDate(parseISO(date), "MMM/dd/yyyy") : null
        
   
}