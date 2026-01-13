function userForm(req,resp)  {
    resp.write(`<form action="/submit" method="post">
        <input type="password" >

        <input type="text" >
        <button>onclick</button>
    </form>`)}{

}
module.exports = userForm