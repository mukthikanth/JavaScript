const insert = document.querySelector('#insert')
window.addEventListener('keydown', (e)=>{
   insert.innerHTML =  `
    <div class='check'>
        <table>
            <tr>
                <th>Key</th>
                <th>Keycode</th>
                <th>code</th>
            </tr>
            <tr>
                <td>${e.key === ' ' ? "space" : e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    
    </div>
    `
})