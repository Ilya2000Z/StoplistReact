import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

export default class History_table extends Component{
    render(){
        function msToTime(duration) {
            var milliseconds = parseInt((duration % 1000) / 100),
              seconds = parseInt((duration / 1000) % 60),
              minutes = parseInt((duration / (1000 * 60)) % 60),
              hours = parseInt((duration / (1000 * 60 * 60)) % 24),
              day = parseInt((duration / (1000 * 60 * 60 * 24)));
          
            hours = (hours < 10) ? "0" + hours : hours;
            minutes = (minutes < 10) ? "0" + minutes : minutes;
            seconds = (seconds < 10) ? "0" + seconds : seconds;
          
            return  "дни: "+day+" часы: " + hours + ":" + minutes;
          }
   if(this.props.historyArr[0]!= null){
            var trueArrTime=[]
            var falseArrTime=[]
            var differenceTimeArrStop = []
            var differenceTimeArrStart= []
            var SumArrTrue=[]
            var SumArrFalse=[]
            this.props.historyArr[0].map((item,key)=>(item.Available=="true"?trueArrTime.push(item.DataCreae):null))
            this.props.historyArr[0].map((item,key)=>(item.Available=="false"?falseArrTime.push(item.DataCreae):null))
    function historyTimeFalse(){
                trueArrTime.map((item,key)=>
                differenceTimeArrStop.push(new Date(trueArrTime[key]).getTime()-new Date(falseArrTime[key]).getTime()) 
                )
                falseArrTime.map((item,key)=>
                differenceTimeArrStart.push(new Date(falseArrTime[key+1]).getTime()-new Date(trueArrTime[key]).getTime())
                )
                var lastelementFalse = msToTime(new Date(trueArrTime[0]).getTime()-new Date(falseArrTime[0]).getTime())[5]
                console.log(lastelementFalse)
                if (lastelementFalse=="N"||lastelementFalse == 0){
                    differenceTimeArrStop.push(new Date().getTime()-new Date(falseArrTime[0]).getTime())
                }
    }
    function historyTimeTrye(){
        trueArrTime.map((item,key)=>
        differenceTimeArrStop.push(new Date(falseArrTime[key]).getTime()-new Date(trueArrTime[key]).getTime())
        )
        falseArrTime.map((item,key)=>
        differenceTimeArrStart.push(new Date(trueArrTime[key+1]).getTime()-new Date(falseArrTime[key]).getTime())
        )
        var lastelementFalse = msToTime(new Date(falseArrTime[0]).getTime()-new Date(trueArrTime[0]).getTime())[5]
        if (lastelementFalse=="N"){
            // differenceTimeArrStart.push()
            differenceTimeArrStart.push(new Date().getTime()-new Date(falseArrTime[0]).getTime())
            console.log(msToTime(new Date().getTime()-new Date(trueArrTime[0]).getTime()))
        }
}   
        if(this.props.historyArr[0][0].Available=="false"){
            historyTimeFalse()
        }else{
            historyTimeTrye()
        }
        var SumeStop=0
        var SumeStart=0
        for(var i=0;i<differenceTimeArrStart.length-1;i++){
            SumeStart+=differenceTimeArrStart[i]    
        }
        for(var i=0;i<differenceTimeArrStop.length;i++){
            SumeStop+=differenceTimeArrStop[i]
        }
        console.log(msToTime(SumeStop))
    }
                var incremnt1=0 
                var incremnt2=0             
        if(this.props.historyArr[0]!= null){
            var stata = <div>
                <h4>Суммарное время нахождения в стопе: {msToTime(SumeStop)}</h4>
                <h4>Суммарное время нахождения в продаже: {msToTime(SumeStart)}</h4>
            </div>
            var historyDish = this.props.historyArr[0].map((item,key)=>
                <ul>
                    <li>{item.Available=="true"?<div>Был доступен к продаже</div>:
                        <div>Поставлен в стоп</div>}
                    </li>
                    <li>Дата: {item.DataCreae.substr(0,10)}</li>
                    <li>Время: {item.DataCreae.substr(11,5)}</li>
                    <li>{item.Available=="false"?<div>Время нахождения в стопе: {msToTime(differenceTimeArrStop[incremnt1++])}</div>:
                        <div>Время продажи: {msToTime(differenceTimeArrStart[incremnt2++])}</div>}
                    </li>
                </ul>)

        } else{
            var historyDish = <div><br></br>История отсутствует</div>
        }
        return(
            <div>
                <Row style={{"--bs-gutter-x":"0rem"}}>
                    <Col lg={6}>
                        {this.props.nameId}
                        {historyDish}
                    </Col>
                    <Col lg={6}>
                        {stata}
                    </Col>
                </Row>
            </div>
        )
    }
}