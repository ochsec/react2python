// Transcrypt'ed from Python, 2023-03-06 20:29:05
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {createElement as el} from './pyreact.js';
var __name__ = 'listItems';
export var ListItem = function (props) {
	var item = props ['item'];
	var handleDelete = props ['handleDelete'];
	var handleEdit = props ['handleEdit'];
	return el ('li', null, props ['item'] + ' ', el ('button', dict ({'type': 'button', 'onClick': (function __lambda__ () {
		return handleDelete (item);
	})}), 'Delete'), el ('button', dict ({'type': 'button', 'onClick': (function __lambda__ () {
		return handleEdit (item);
	})}), 'Edit'));
};
export var ListItems = function (props) {
	return (function () {
		var __accu0__ = [];
		for (var item of props ['listItems']) {
			__accu0__.append (el (ListItem, dict ({'key': item, 'item': item, 'handleDelete': props ['handleDelete'], 'handleEdit': props ['handleEdit']})));
		}
		return __accu0__;
	}) ();
};

//# sourceMappingURL=listItems.map