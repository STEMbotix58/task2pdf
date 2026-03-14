import { Text, View } from "@react-pdf/renderer";
import { annexureStyles } from "../styles/annexureStyles";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";
import { useDeliveryStore } from "@/features/delivery/model/deliveryStore";

export const AnnexureItemsPage = ({ itemChecklist, items }) => {
  const store = useDeliveryStore();
  const list = itemChecklist ?? items ?? store.itemChecklist ?? [];

  return (
    <PDFPageLayout>
      {/* Title */}
      <Text style={annexureStyles.title}>
        Annexure–I: Item Specification and Quantity Checklist
      </Text>

      <View style={annexureStyles.table}>
        {/* Header */}
        <View style={[annexureStyles.row, annexureStyles.headerRow]}>
          <Text
            style={[
              annexureStyles.cell,
              annexureStyles.colSr,
              annexureStyles.headerText,
            ]}
          >
            Sr
          </Text>
          <Text
            style={[
              annexureStyles.cell,
              annexureStyles.colName,
              annexureStyles.headerText,
            ]}
          >
            Description of Goods
          </Text>
          <Text
            style={[
              annexureStyles.cell,
              annexureStyles.colQty,
              annexureStyles.headerText,
            ]}
          >
            Qty
          </Text>
          <Text
            style={[
              annexureStyles.cell,
              annexureStyles.colCheck,
              annexureStyles.headerText,
            ]}
          >
            Received
          </Text>
        </View>

        {/* Body */}
        {list && list.length > 0 ? (
          list.map((item, index) => (
            <View
              key={item.id || index}
              style={[
                annexureStyles.row,
                annexureStyles.bodyRow,
                index % 2 === 0 ? annexureStyles.altRow : null,
              ]}
            >
              <Text style={[annexureStyles.cell, annexureStyles.colSr]}>
                {index + 1}
              </Text>
              <Text style={[annexureStyles.cell, annexureStyles.colName]}>
                {item.itemName || "—"}
              </Text>
              <Text style={[annexureStyles.cell, annexureStyles.colQty]}>
                {item.quantity ?? "—"}
              </Text>
              <Text style={[annexureStyles.cell, annexureStyles.colCheck]}>
                {item.received ? "Yes" : "No"}
              </Text>
            </View>
          ))
        ) : (
          <View style={annexureStyles.emptyRow}>
            <Text style={annexureStyles.emptyText}>
              No items found. Please upload Excel file.
            </Text>
          </View>
        )}
      </View>
    </PDFPageLayout>
  );
};
