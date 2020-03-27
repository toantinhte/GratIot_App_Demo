import {STARTALARM, SUCCESSALARM, ERRORALARM, ADDALARM, ADDLISTALARM, DELETEALARM, EDITALARM, DEFAULTALARM} from '../../types/app/alarm';
import {on, emit} from '../../socket';
const add = (alarm)=>({
    type:ADDALARM,
    alarm:alarm,
})

const addList = (listAlarm)=>({
    type:ADDLISTALARM,
    listAlarm:listAlarm,
})

const del = (alarmId)=>({
    type:DELETEALARM,
    alarmId: alarmId,
})

const edit = (alarm) => ({
    type:EDITALARM,
    alarm:alarm,
})

export const sendDataAddAlarm = (alarm)=>{
    try{
        return async dispatch => {
            emit('addAlarm',alarm);
        }

    }catch(err){
        console.log(err);
    }
}

export const addAlarm = (alarm)=>{
    try{
        return async dispatch => {
            on('addAlarm', async (data)=>{
                if(data){
                    if(JSON.parse(data).status ='success'){
                        await dispatch(add(JSON.parse(data).result));
                    }
                    if(JSON.parse(data).status = 'fail'){
                    }
                }
            })
        }

    }catch(err){
        console.log(err);
    }
}

export const editAlarm = (alarm)=>{
    try{
        return async dispatch => {
            await dispatch(edit(alarm));
        }

    }catch(err){
        console.log(err);
    }
}

export const delAlarm = (alarmId)=>{
    try{
        return async dispatch => {
            dispatch(del(alarmId))
        }

    }catch(err){
        console.log(err);
    }
}

export default addListAlarm = ()=>{
    try{
        return async dispatch => {
            on('listAlarms', async (data)=>{
                console.log(data);
                if(data){
                    if(JSON.parse(data).status = 'success'){
                        dispatch(addList(JSON.parse(data).result))
                    }
                    if(JSON.parse(data).status = 'fail'){

                    }
                }
            })
        }

    }catch(err){
        console.log(err);
    }
}

export const sendDataListAlarm  = (deviceId) => {
    try{
        return async dispatch => {
            emit('listAlarms',{deviceId:deviceId});
        }

    }catch(err){
        console.log(err);
    }
}