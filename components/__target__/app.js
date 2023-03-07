// Transcrypt'ed from Python, 2023-03-06 20:30:05
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {ListItems} from './listItems.js';
import {createElement as el, render, useState} from './pyreact.js';
var __name__ = '__main__';
export var App = function () {
	var __left0__ = useState ('');
	var newItem = __left0__ [0];
	var setNewItem = __left0__ [1];
	var __left0__ = useState ('');
	var editItem = __left0__ [0];
	var setEditItem = __left0__ [1];
	var __left0__ = useState ([]);
	var listItems = __left0__ [0];
	var setListItems = __left0__ [1];
	var handleSubmit = function (event) {
		event.preventDefault ();
		var new_list = list (listItems);
		if (len (editItem) > 0) {
			new_list [new_list.index (editItem)] = newItem;
		}
		else {
			new_list.append (newItem);
		}
		setListItems (new_list);
		setNewItem ('');
		setEditItem ('');
	};
	var handleChange = function (event) {
		var target = event ['target'];
		setNewItem (target ['value']);
	};
	var handleDelete = function (item) {
		var new_list = list (listItems);
		new_list.remove (item);
		setListItems (new_list);
	};
	var handleEdit = function (item) {
		setNewItem (item);
		setEditItem (item);
	};
	return el ('form', dict ({'onSubmit': handleSubmit}), el ('label', dict ({'htmlFor': 'editBox'}), (len (editItem) == 0 ? 'Add Item: ' : 'Edit Item: ')), el ('input', dict ({'id': 'editBox', 'onChange': handleChange, 'value': newItem})), el ('input', dict ({'type': 'submit'})), el ('ol', null, el (ListItems, dict ({'listItems': listItems, 'handleDelete': handleDelete, 'handleEdit': handleEdit}))));
};
render (App, null, 'root');

//# sourceMappingURL=app.map