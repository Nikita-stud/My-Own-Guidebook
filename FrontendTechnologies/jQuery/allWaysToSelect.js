//ALL WAYS to select 4TH paragraph

/*
  <div id="example">
      <p id="para1" class="classA">The first paragraph.</p>
      <p class="classB">The second paragraph.</p>
      <p id="para3">The third paragraph.</p>
      <p id="para4" lang="en-us">The fourth paragraph.</p>
      <p id="para5" lang="en-gb">The fifth paragraph.</p>
  </div>
*/
$('#para4');
$("[id='para4']");
$("[lang='en-us']");
$("[lang^='en-']").first(); // starts with 'en-'
$("p[lang='en-us']");
$('p:eq(3)'); // zero-indexed
$('p').eq(3); // method version
$('p:nth-child(4)'); // 1-indexed, 4th child
$('p:nth-of-type(4)'); // 4th <p> element
$('p').first().nextAll().eq(2); // 3rd sibling after first
$('#para3').next(); // next sibling after para3
$('#para5').prev(); // previous sibling before para5
$('#example p:eq(3)'); // 4th <p> inside #example
$('#example').children('p').eq(3);
$('p:last').prev(); // one before last
$('p').not('.classA, .classB, #para3, #para5');
$('p:not(.classA):not(.classB):not(#para3):not(#para5)');
$("p:contains('fourth')"); //by text in p
$('p').filter('#para4');
$('p').filter("[lang='en-us']");
$('p').filter(function (index) {
  return index === 3;
});

//Select the para3 and change first p element using traversing
/*
  <div id="example">
      <p >The first paragraph.</p>
      <div>The second paragraph.</div>
      <p id="para3">The third paragraph.</p>
      <p>The fourth paragraph.</p>
      <div>The fifth paragraph.</div>
  </div>
*/
$('#para3').prevAll('p').first();
$('#para3').siblings('p').first();
$('#para3').siblings('p').eq(0);
$('#para3').parent().children('p').first();
$('#para3').parent().find('p:first');
$('#para3').prev().prev();
$('#para3').closest('#example').find('p').first();
