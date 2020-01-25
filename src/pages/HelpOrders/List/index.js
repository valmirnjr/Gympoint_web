import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";

import api from "~/services/api";

import ListLayout from "~/pages/_layouts/list/index";
import HelpOrderTable from "~/components/Tables/HelpOrderTable";

import { Header } from "./styles.js";

export default function ListRegistries() {
  const [helpOrders, setHelpOrders] = useState([]);

  useEffect(() => {
    async function loadHelpOrders() {
      try {
        const response = await api.get("/help-orders");

        setHelpOrders(response.data);
      } catch (err) {
        toast.error("Erro no carregamento dos pedidos de auxílio.");
      }
    }

    loadHelpOrders();
  }, []);

  return (
    <ListLayout>
      <>
        <Header>
          <strong>Pedidos de auxílio</strong>
        </Header>
        <HelpOrderTable helpOrders={helpOrders} />
      </>
    </ListLayout>
  );
}
