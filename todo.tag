<todo>
  <h1 class="ui center aligned header">{ opts.title }</h1>
  <todo-input></todo-input>
</todo>

<todo-input>
  <div class="ui text container">
    <div class="ui white center aligned segment">
      <div class="ui action input">
        <button class="ui icon button">
          <i class="checkmark icon"></i>
        </button>
        <input type="text" placeholder="What needs to be done?">
      </div>
    </div>
  </div>
</todo-input>

<todo-item>
  <div class="ui checkbox">
    <input type="checkbox" name={ opts.id }>
    <label>{ opts.text }</label>
  </div>
</todo-item>
