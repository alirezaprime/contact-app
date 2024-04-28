import styles from "./ListItem.module.css";

function ListItem() {
  return (
    <div className={`${styles.ListItem} ${styles.fontstyle}`}>
      <div className={styles.flexalign}>alireza</div>
      <div className={styles.flexalign}>
        <span className={styles.padRight}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAbBJREFUSEvt1j9sTlEYx/FPg8RgKLEZTSxtF4nFZLNhIaQ2MTRNG2liwmKQaOPPICYJiQHd2sVo64BuXcTUsRWpjeA+cl45rnvf+77eW61wtnvPc37f8/w5zzlDtmgMbRHXf/Afi/y2CfUR3MZ+TGJxwBAcwzh2YQ6vO3q5x4fwCrsz2E1cwZc+N7ADNzCTrdvASLGRd/EvB09htgLwEmew2iP8AJ7iaIX9RBHNe2XwNVytEX+P81hogJ/AoyJde2vsrhf/g/OTx93AHZ07uIxPJeHI4S2ER93Gb4NDdBmnigi8TYSDeJ7y15SNgcAh/hGXEEUUOdvTREzzA4N75Pxi9neAo0rPlQqxm8df8TidgrJdpcdxlL6XemmMYhjz2NcQ43WcxIe8S2Vr+gZHJUdjCHi01aqxlKDRaGKzP9pjE7juHI/hTVq8M3W38nm9i2l8TnatgzubP42H6eMCnlWkp1WPc/3D6fJYqamLTQN3q7NNC3VTA+kLfBH3KxTz4moCdubrwMF4EEb5fRyvjic4XlJvAxxN5QXOFjfYWhncqzet2G2bx14r3vQi8u95/A2I1V0fhbK+uwAAAABJRU5ErkJggg==" />
        </span>
        <span className={styles.fontstyle}>alireza@gmail.com</span>
      </div>
      <div className={styles.flexalign}>
        <span className={styles.padRight}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAd5JREFUSEvt1svLTlEUx/HPi0SEDCRl6DowQFIkuQ1k6JaMMZFEiqQkpUSSCWZMXDLxB4gYKCSZECMjGbilpNzO0lGn7ezznOd9jt4Be7jPWr/v3muvyxkyQmtohLj+g6uRP4S9OIejXT9JXajH4RI2VWBHcKxLeAqegFtYUgPZhfNdwVPwMtzLiP/AFlzvAp6CV+BOg/BXrMXtQeEpeAGe9BD9jIV4Ngg8BU/BuxaCB3CyhV3WpC6rX2Fmg+jjItQr8bFr8FVszog+LN/4/SDQ8K278XZcrhF+gFX4NCg0B56MNxibAGbjRRfQHDj2o1HsSCD7cPpvg+fjKUZVQB8wF68z8GnYhrt41OuATWPxTFFaexKBOExk9Ntkf2rZ8ebhGyJPrjTBm8AT8RwzEoHY21CIvyz3o79HJ1uc2O0sfC/k4L1+BBaVoRufCHzHRZwo82FdBnCwtPnjcy9wOMTtbmZKr9dTxveY57tTwzbg8Nla1vaYNqQam1NF/e+v7rcFh0+E8xqizvtd0XQmIUbrr9UPOOyn42zyd9LmEIdxfLg3rvotL6fT0hbUG9g43DfO6c8q6ncN1hfZvxpp9t8v6/5L1+Cq3mjMQXSw3yumWe1Q6feNW0S2ncm/B/4JJctDHz3WUGoAAAAASUVORK5CYII=" />
        </span>
        <span className={styles.fontstyle}>09332314140</span>
      </div>
      <div className={styles.flexalign}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAASFJREFUSEvtljFuwkAQRZ9FRUWOwBEQFwDOEIoUILgBEkqfUKcgRyAKDRKcAbgA4ggcASo6kozkjUYm9nrXlpxip/TOzNv9M+udiIosqoiLC7gGPAP1lM1egTfglucwLuB3YGJJOgemZYJHwCJPQuAJWNl8kyfuAltbkOd6D9iZ2H8DbgJjzxPZwqRUp7QT6+AW8GDLZlk/A8e/fLK6WurRKQje/9RV+ubOAlhLkpR6Fi+KdMkSiKTmqryoJKVIbcryCujkwpFNyXexrwAu2tVBaq1gaC6jRrjHv33h8kjIBCEm77WMQto+1GikJ5hSpPZ5Ib3Aa+DRh6ZiNkDf9c81AD4LgofA0hUs/u34CWw4buACiMyHtDiXgd6Rne1eGfgbWNpaHzl+XRoAAAAASUVORK5CYII=" />
      </div>
    </div>
  );
}

export default ListItem;
