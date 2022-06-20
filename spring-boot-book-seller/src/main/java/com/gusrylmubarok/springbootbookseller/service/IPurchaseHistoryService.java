package com.gusrylmubarok.springbootbookseller.service;

import com.gusrylmubarok.springbootbookseller.model.PurchaseHistory;
import com.gusrylmubarok.springbootbookseller.repository.projection.IPurchaseItem;

import java.util.List;

public interface IPurchaseHistoryService
{
    PurchaseHistory savePurchaseHistory(PurchaseHistory purchaseHistory);

    List<IPurchaseItem> findPurchasedItemsOfUser(Long userId);
}
