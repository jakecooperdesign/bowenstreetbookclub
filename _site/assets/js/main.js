$('document').ready(function(){

	var $timeline = $('.timeline');
	var $events = $('.timeline li');
	var $timeline_max = $timeline.attr('data-timeline-max');

	$events.each(function(){
		$event = $(this);
		$val = $event.attr('data-marker-val');
		$percent = ($val / $timeline_max * 100).toFixed(2);

		$event.css({
			left: $percent + "%",
		});
	})
	console.log($timeline_max);
});