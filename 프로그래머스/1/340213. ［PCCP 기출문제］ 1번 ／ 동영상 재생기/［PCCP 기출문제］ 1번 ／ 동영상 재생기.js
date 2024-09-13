function solution(video_len, pos, op_start, op_end, commands) {
    let [pos_start,new_op_start,new_op_end,new_video_len]=getMinGroup([pos,op_start,op_end,video_len])
    let commandObj={
        next:10,
        prev:-10
    }
    if(pos_start<=new_op_end&&pos_start>=new_op_start){
        pos_start=new_op_end
    }
    if(pos_start>new_video_len){
            pos_start=new_video_len
    }
    for(let command of commands){
        pos_start+=commandObj[command]    
        if(pos_start<0){
            pos_start=0
        }
        if(pos_start>new_video_len){
            pos_start=new_video_len
        }
        if(pos_start<=new_op_end&&pos_start>=new_op_start){
           pos_start=new_op_end
        }
    }
  
    let time=[String(Math.floor(pos_start/60)),String(pos_start%60)]
    time[0]=time[0].length>1?time[0]:'0'+time[0]
    time[1]=time[1].length>1?time[1]:'0'+time[1]
    return time.join(':')
}
function getMinGroup(arr){
    let newArr=[]
    for(let time of arr){
        let [min,second]=time.split(':').map(Number)
        newArr.push(min*60+second)
    }
    return newArr
    
}