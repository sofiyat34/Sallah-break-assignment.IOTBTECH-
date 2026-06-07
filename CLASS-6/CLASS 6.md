1.QUESTION:     
explain the differences betwn, flex-shrink, and flex-basis                              

ANSWER:

flex-basis defines the initial size of a flex item before extra space is distributed.

I will think of it as:

"How big should this item start?"


2. flex-shrink → Controls shrinking behavior

flex-shrink determines how much an item should shrink when there isn't enough space.

I will think of it as:

"If space becomes too small, how much should I reduce my size?"

2. QUESTION: when would align-items:stretch not work as expected? give a specific example wit code


ANSWER:
align-items: stretch only works when flex items do not already have a fixed size in the cross axis

<div class="container">
<div class="box">
Very long content that pushes size larger
</div>
</div>
It can only work when Cross-axis size is auto and Container has available space.

It won't work when Fixed width/height already exists
Content constraints override sizing
No extra space exists to stretch into