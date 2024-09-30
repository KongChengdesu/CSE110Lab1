window.onload = function() {

    document.getElementById("subscribe-form").addEventListener("submit", alertSubFunc);

}

function alertSubFunc(){
    const email = document.getElementById("email-input").value;
    alert(`Subsciber "added": ${email}`);
    document.getElementById("subscribe-form").reset();
}