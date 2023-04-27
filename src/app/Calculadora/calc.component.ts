import { Component } from "@angular/core";

@Component({
    selector: 'calc',
    templateUrl: './calc.component.html',
    styleUrls: ['./calc.component.css']
})
export class CalcComponent{
    display: string="";
    aux: boolean;
    clickbotao(valor: number):void{
        console.log(valor);
        if(this.aux){
               this.display.toString();
               this.display="";
               this.aux=false
        }
    
        if(valor==15){
            console.log("soma")
            this.display+="+"
        }
       else if(valor==16){
            console.log("menos")
            this.display+="-"
        }
        else if(valor==17){
            console.log("vezes")
            this.display+="*"
        }
        else if(valor==18){
            console.log("dividido")
            this.display+="/"
        }
       else if(valor==19){
            console.log("apaga1")
            this.display=this.display.substring(0,this.display.length-1)
        }
        else if(valor==20){
            console.log("apagatodos")
            this.display="";
        }
       else  if(valor==21){
            this.display=eval(this.display)
            this.aux=true;
           
    
        }else{
            this.display+=valor
        }
    }
}