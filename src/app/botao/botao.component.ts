import { Component, Output, EventEmitter, Input} from "@angular/core";


@Component({
    selector: 'Botao',
    templateUrl: './botao.component.html',
    styleUrls: ['./botao.component.css']
    
})
export class BotaoComponent{
    

   @Input()
   Largura= ""

   @Input()
   Altura= ""

    @Output() 
    click=new EventEmitter

    @Input()
    Valor=""
    


   clickBotao():void {
        this.click.emit()  
    }
}