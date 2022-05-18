const btnBuyTicket =  document.querySelectorAll(".btn-ticket");
const onmodal  = document.querySelector(".modal");
const btnClose = document.querySelector(".btn-close");
const modalContainer = document.querySelector(".modal-container")
btnBuyTicket.forEach((btnBuy)=>{
    btnBuy.onclick = (e)=>{
        onmodal.classList.add("active");
    }
})
btnClose.onclick = ()=>{
    onmodal.classList.remove("active");
}
onmodal.onclick = (e)=>{
    onmodal.classList.remove("active");
}
modalContainer.onclick = (e)=>{
    e.stopPropagation();
}

const testCallback = (callback)=>{
    let sdt;
    console.log("cho tôi xin số điện thoại");
    setTimeout(()=>{
        sdt = 12345;
        console.log("Đang tìm số...")
        callback(sdt)
    },2000)
}
const callback = sodth => console.log(`số điện thoại đây ${sodth}`)
testCallback(callback)