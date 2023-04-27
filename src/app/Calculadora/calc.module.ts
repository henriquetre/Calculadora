import { NgModule } from "@angular/core";
import { CalcComponent } from "./calc.component";
import { CommonModule } from "@angular/common";
import { BotaoModule } from "../botao/botao.module";

@NgModule({
    declarations: [CalcComponent],

    imports: [
        CommonModule,
        BotaoModule
    ],
    exports:[
        CalcComponent
    ]
})
export class CalcModule{

}