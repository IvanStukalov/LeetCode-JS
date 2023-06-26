// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
//
// Merge all the linked-lists into one sorted linked-list and return it.

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let ptrs = new Array(lists.length);
  for (let i = 0; i < lists.length; i++) {
    if (lists[i] === null || lists[i].val === null) {
      lists.splice(i, 1);
    }
  }
  if (lists.length === 0) {
    return null;
  }
  for (let i = 0; i < lists.length; i++) {
    ptrs[i] = lists[i]
  }

  let head = new ListNode(null, null);
  let ptr = new ListNode(null, null);
  let currentVals = new Array(ptrs.length);

  for (;;) {
    for (let i = 0; i < ptrs.length; i++) {
      currentVals[i] = ptrs[i].val;
    }
    let min = Math.min(...currentVals)
    let indexOfMin = currentVals.indexOf(min);

    if (head.val === null) {
      head = new ListNode(min)
      ptr = head;
    } else {
      ptr.next = new ListNode(min);
      ptr = ptr.next;
    }
    ptrs[indexOfMin] = ptrs[indexOfMin].next;
    for (let i = 0; i < ptrs.length; i++) {
      if (!ptrs[i]) {
        ptrs.splice(i, 1);
        currentVals.splice(i, 1);
      }
    }
    if (ptrs.length === 0) {
      break;
    }
  }

  return head;
};

let node13 = new ListNode(5);
let node12 = new ListNode(4, node13);
let node11 = new ListNode(1, node12);

let node23 = new ListNode(4);
let node22 = new ListNode(3, node23);
let node21 = new ListNode(1, node22);

let node32 = new ListNode(6);
let node31 = new ListNode(2, node32);

let node = new ListNode(null, null);

let arr = [node11, node21, node31];
let head = mergeKLists(arr);

for (;head;) {
  console.log(head.val);
  head = head.next;
}
