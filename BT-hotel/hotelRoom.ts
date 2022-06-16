let hotelRooms =[[0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]];


let refactoringHotelRoom=(arr:any):number=>{
    let total = 0
    for (let j = 0; j < arr.length ; j++) {
        for (let z = 0; z < arr[j].length;z++){
            if(arr[j][z]== 0){
                for (let i = j; i < arr.length; i++) {
                    arr[i][z] = 0
                }
            }
            total += arr[j][z];
        }
    }
    return total
}

console.log("total room price is ",refactoringHotelRoom(hotelRooms));


