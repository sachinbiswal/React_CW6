import img1 from '../Component/image1.png';
import img3 from '../Component/image3.png';
import img2 from '../Component/image2.png';

const Footer = () =>{
    return(
        <div style = {{width : '1000px',height  :'300px'}}>
            <div style = {{width  :"800px",height : "250px",marginLeft : "10%",display : "flex",justifyContent : "space-around",alignItems : "center"}}>
                <img src = {img1} alt = "image1"/>
                <img src = {img3} alt = "image3"/>
                <img src = {img2} alt = "image2"/>  
        </div>
        <div style = {{width  :"800px",height : "100px",marginLeft : "11%",marginTop : "-10%",display : "flex",justifyContent : "space-around",alignItems : "center"}}>
                <h4>2,500</h4>
                <h4>45,000</h4>
                <h4>200,000+</h4>

                </div> 
                
            <div style = {{width  :"900px",height : "100px",marginLeft : "5%",marginTop : "-6%",display : "flex",justifyContent : "space-evenly",alignItems : "center"}}>
                <h6>enterpries organization successfully launched</h6>
                <h6>enterpries user onboarded seamlessly</h6>
                <h6>proffesonal trained on product and strategy</h6>
                


                </div> 
        
        </div>
    )

}
export default Footer