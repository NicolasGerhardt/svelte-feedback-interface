<script>
    import {v4 as uuidv4} from 'uuid';
    import { FeedbackStore } from "../stores/feedback";
    import Card from "../ui/Card.svelte";
    import Button from "../ui/Button.svelte";
    import RatingSelect from "../ui/RatingSelect.svelte";

    let text = "";
    let rating = 10;
    let btnDisabled = true;
    const min = 10;
    let message = null;

    $: isTextMinLength = text.trim().length >= min

    const handleInput = (e) => {
        if (isTextMinLength) {
            message = null;
            btnDisabled = false;
        } else {
            message = `Text must be at least ${min} characters`;
            btnDisabled = true;
        }
    };

    const handleRatingSelect = (e) => {
        rating = e.detail;
    };

    const handleSubmit = (e) => {
        if (isTextMinLength) {
            const newFeedback = {
                id: uuidv4(),
                text,
                rating: +rating
            }
            
            FeedbackStore.update(currentFeedback => {
                return [newFeedback, ...currentFeedback]
            })

            text = ''
            rating = 10
        }
    }
</script>

<Card>
    <header>
        <h2>How would you rate your service with us?</h2>
    </header>

    <form on:submit|preventDefault={handleSubmit}>
        <RatingSelect on:rating-select={handleRatingSelect} />
        <div class="input-group">
            <input
                type="text"
                on:keyup={handleInput}
                bind:value={text}
                placeholder="Tell us something that keeps you coming back"
            />
            <Button type="submit" disabled={btnDisabled}>Send</Button>
        </div>

        {#if message}
            <div class="message">{message}</div>
        {/if}
    </form>
</Card>

<style>
    header {
        max-width: 400px;
        margin: auto;
    }
    header h2 {
        font-size: 22px;
        font-weight: 600;
        text-align: center;
    }
    .input-group {
        display: flex;
        flex-direction: row;
        border: 1px solid #ccc;
        padding: 8px 10px;
        border-radius: 8px;
        margin-top: 15px;
    }
    input {
        flex-grow: 2;
        border: none;
        font-size: 16px;
    }
    input:focus {
        outline: none;
    }
    .message {
        padding-top: 10px;
        text-align: center;
        color: rebeccapurple;
    }
</style>
