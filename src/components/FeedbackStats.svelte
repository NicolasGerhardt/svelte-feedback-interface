<script>
    import { FeedbackStore } from '../stores/feedback'

    $: count = $FeedbackStore.length;
	$: average = (
		$FeedbackStore.reduce((x, { rating }) => x + rating, 0) / count
	).toFixed(0);
</script>

<div class="feedback-stats">
    <h4>{count} Reviews</h4>
    <h4>Ratings Average: {isNaN(average) ? "-": average}</h4>
</div>

<style>
    .feedback-stats {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
