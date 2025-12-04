async function sendPrompt() {
    const prompt = document.getElementById("prompt").value;

    const res = await fetch("http://YOUR_EC2_PUBLIC_IP:8000/generate", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ prompt })
    });

    const data = await res.json();
    document.getElementById("response").innerText = data.response;
}
