
import css from './Statistics.module.css'
import { BsArrowUpShort } from 'react-icons/bs'
import { groupNumber } from '../../data'
import StatisticsChart from '../StatisticsChart/StatisticsChart'

const Statistics = () => {
  return (
    <div className={`${css.container} theme-container`}>
        <span className={css.title}>Overview Statistics</span>
        <div className={`${css.cards} grey-container`}>
            
            <div>
               <div className={css.arrowIcon}>
                    <BsArrowUpShort/>
               </div> 

               <div>
                    <span>Top items this month</span><span>Office comps</span>
               </div>
            </div>


            <div className={css.card}>
                <span>Items</span><span>$ {groupNumber(350)}</span>
            </div>

            <div className={css.card}>
                <span>Profit</span><span>$ {groupNumber(450000)}</span>
            </div>

            <div className={css.card}>
                <span>Daily Average</span><span>$ {groupNumber(4000)}</span>
            </div>    
        </div> 

        <StatisticsChart/>       
      
    </div>
  )
}

export default Statistics
