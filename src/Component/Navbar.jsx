import hover from "../Component/hover.css";
function Navbar(){
    return(
        <div style = {{width : "1000px",height  : "60px" ,display  :"flex",justifyContent : "space-between",alignItems : "center"}}>
            <div style = {{marginLeft : "45px",width : "500px",height  :"100%",display  :"flex",justifyContent  :"space-between",alignItems  :"center"}}>
            <img  src = "https://logos-world.net/wp-content/uploads/2021/03/Hootsuite-Logo-2014-present.png" width = "100px" heigth ="100px"/>
            <h6>Platform</h6>
            <h6>Plans</h6>
            <h6>Enterpries</h6>
            <h6>Resources</h6>
            <h6>Educatinon</h6>
        </div>
        <div style = {{width : "350px",height : "100%",marginLeft : '200px',marginRight : "45px",display : "flex",justifyContent : "space-between",alignItems  :"center"}}>
                <h5>Contact Us</h5>
                <h5>Log In</h5>
                <button style = {{width  :"100px",height : "30px",backgroundColor : "#29863e",border : "none",color : "white",borderRadius : "5px",fontSize : "800",fontWeight : "800"}}>Sign Up</button>
            </div>
        </div>
    )
}
export default Navbar;