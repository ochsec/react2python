from pyreact import useState, render, createElement as el
from listItems import ListItems

def App():
  newItem, setNewItem = useState("")
  editItem, setEditItem = useState("")
  listItems, setListItems = useState([])
  
  def handleSubmit(event):
    event.preventDefault()
    new_list = list(listItems)
    if len(editItem) > 0:
      new_list[new_list.index(editItem)] = newItem
    else:
      new_list.append(newItem)
    setListItems(new_list)
    setNewItem("")
    setEditItem("")

  def handleChange(event):
    target = event['target']
    setNewItem(target['value'])

  def handleDelete(item):
    new_list = list(listItems)
    new_list.remove(item)
    setListItems(new_list)

  def handleEdit(item):
    setNewItem(item)
    setEditItem(item)

  return el('form', {'onSubmit': handleSubmit},
            el('label', {'htmlFor': 'editBox'}, "Add Item: " if len(editItem) == 0 else "Edit Item: "),
            el('input', {'id': 'editBox',
                         'onChange': handleChange,
                         'value': newItem
                         }
            ),
            el('input', {'type': 'submit'}),
            el('ol', None, el(ListItems, {'listItems': listItems,
                                          'handleDelete': handleDelete,
                                          'handleEdit': handleEdit})
            ),
  )

render(App, None, 'root')
