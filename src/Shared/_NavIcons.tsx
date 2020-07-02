import * as React from 'react';

import {motion} from 'framer-motion'

function NavIcons(){
    

    function handleClick() {
       
        console.log('The link was clicked.');
      }



      const HoverMotion = {
          rest: {  width: "100%", x: "0" },
          open : {width: "165%", x : "-50px",
          transition: {
             duration: 0.3,
              type: "tween"  }
        }
          
      }

      const item = {
        rest: {  width: "0%", x: "0" },
        open : {width: "0%", x : "-70px",
      
        transition: { duration: 0.3, type: "tween"  }
      }
      }

      const HiddenSearch = {
        rest: {  width: "0px", x: "0", display: 'none'},
        open : {width: "90px", x : "0px", display: 'block',
      
        transition: { duration: 0.3, type: "tween"  }}
      }
      const HiddenItems = {
        rest: {  width: "0px", x: "0", display: 'none' },
        open : {width: "0px", x : "10px", display: 'block' , 
      
        transition: { duration: 0.3, type: "tween"  }
      }
      }



    return(
        
        <motion.table 
        variants = {HoverMotion}
        initial="rest"
        whileHover= "open"
       
        className = "icons" >
        <tbody>
            <tr className = "iconRow">

            <motion.td
            variants = {item}
            className = 'fa fa-search'
            
            >
                

                <motion.form
                variants = {HiddenSearch}>
                <motion.input
                 variants = {HiddenSearch}
                  type="text" placeholder="search..." className="IconSearch" />
                  <input type="submit" className="hiddenButton"/>
                </motion.form>
                

            </motion.td>

            <td className = 'fa fa-heart' onClick={handleClick}>
                <motion.label variants={HiddenItems} className="IconLabel">Favorites</motion.label>
            </td>
          </tr>
          <tr className = "iconRow">
          <motion.td
            variants = {item}
              className = 'fa fa-shopping-cart'>
                  <motion.label variants={HiddenItems} className="IconLabel">Cart</motion.label>
              </motion.td>
            <td  className = 'fa fa-sign-in'>
            <motion.label variants={HiddenItems} className="IconLabel">Log in</motion.label>
            </td>
          </tr>
        </tbody>
          
        </motion.table>
     
    )
}



export default NavIcons;