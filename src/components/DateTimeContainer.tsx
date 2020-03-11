import React, {CSSProperties} from 'react';
import moment from 'moment';
import 'moment/locale/sv';
import Clock from './Clock'

export default function DateTimePlace() {

  //let currentTime = moment().format('LTS');
  let currentDate = moment().format('LL');


/*  ------ FOR TESTING ERROR-BOUNDARIES-----
 let errorTest: any = null
  console.log(errorTest.kjdsfh)
   */
  
  return (
    <div style = {timeContainer}>
        <Clock />
      <div style = {timeItem}>
        {currentDate}
      </div> 
    </div>
  );
}

const timeContainer: CSSProperties = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const timeItem: CSSProperties = {
  margin: '0 0 2rem 0',
  fontSize: '1.2rem'
}