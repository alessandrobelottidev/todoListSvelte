<script>
  import TodoView from './TodoView.svelte'
  import {todoDb} from "./store"
</script>

{#each $todoDb as todo, index}
  <TodoView todo={todo} pos={index} />
{/each}