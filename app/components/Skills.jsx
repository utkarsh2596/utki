import React from 'react';

import styles from '../style/style.css';

var Skills = React.createClass({
  render:function(){
    return(
      <div className={styles.component}>
        <h2 className={styles.Header}>Here are all the skills i possess.</h2>
        <h3 className={styles.message}>All the soft skills and hard skills I know.</h3>
      </div>
    );
  }
})

module.exports = Skills;
