import { NgModule } from "@angular/core";
import { BotaoComponent } from "./botao.component";
import { CommonModule } from "@angular/common";
import { CalcComponent } from "../Calculadora/calc.component";


@NgModule({
    declarations:[BotaoComponent
    ],

    imports:[
        CommonModule
    ],
    exports:[
        BotaoComponent
    ]


})
export class BotaoModule{

}