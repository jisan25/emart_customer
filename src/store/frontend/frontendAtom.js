import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const homePageAtom = atom([]);
export const productAtom = atom([]);
export const cartAtom = atom([]);
export const purchasedOrdersAtom = atom([]);
export const showOrderDetailsAtom = atom(false);
export const orderItemAtom = atom({});

// ------- add to cart -------

const CART_ITEM_COUNT = "cartItemCount";

export const cartItemCountAtom = atomWithStorage(CART_ITEM_COUNT, 0);
export const cartDataAtom = atom([]);
export const orderSummaryAtom = atom({});

// --------- order details ----------

export const myOrderRefAtom = atom("");
