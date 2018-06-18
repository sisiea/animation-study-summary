# CSS 3 动画学习总结

CSS3 的动画有两种：transition 动画， animation 动画。

## Transition 动画

### Transition 动画涉及到的属性

- transition-property
- transition-duration
- transition-delay
- transtion-timing-function

四个属性可以简写为一个transition属性。

	transition: <property> <duration> <timing-function> <delay>

注： 合并写时，第一个出现的时间解析为 duration ，第二个为 delay。

#### 1.各个属性的取值：
- transition-property
   常见的属性都能应用于动画，比如：width, height, border, color, padding, margin ...
   具体的列表: 
   [可用的全部列表](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_animated_properties "可用的全部列表")
   
- transition-duration 和 transition-delay
   都是时间。比如 2s 
- transtion-timing-function 缓动函数
   可以取 枚举值: 
   
   - linear 
   - ease相关的
    - ease-out
    - ease-in
    - ease-in-out
   - step先关的
      - step-start
      - step-end
      - 还有一个 steps 函数 . 
            	transition-timing-function: steps(4,end);
    可以 由四个点决定的 贝塞尔函数：
	             cubic-bezier(x1, y1, x2, y2)

####2.在transtion属性中 定义多个动画属性：
	.box1{
		width: 100px;
		height: 100px;
		background-color: #0000FF;  
		transition: 2s width,2s height,2s background-color,2s transform;
	}
注：可以用 all 来表明开始 结束两个状态所有改变的属性。
```css
.box1{
    width: 100px;
    height: 100px;
    background-color: #0000FF;  
    transition: all 2s;
}
.box1:hover {
    background-color: #FFCCCC;
    width: 200px;
    height: 200px;  
    transform: rotate(45deg);
}
```

### Transition 局限
- 一次性的。
- 只能定义开始和结束两种状态，且要明确地知道开始和结束状态。
   怎么理解这句话呢：
   要明确地知道transition开始结束两个状态的数值，浏览器才能计算中间的状态，否则无法出现动画的效果。
   例子:
   ``` css
       height: 0px; -> height: auto;
   ```

