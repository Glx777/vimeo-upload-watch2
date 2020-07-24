import React, { ReactElement, useState, ChangeEvent } from "react"
import { AppBar, Tabs, Tab } from "@material-ui/core"
import { TabContext, TabPanel } from "@material-ui/lab"

import { tabs } from "./tabs"

export const Container = (): ReactElement => {
  const [selectedTab, setSelectedTab] = useState(0)

  const handleChange = (_event: ChangeEvent, value: number) => {
    setSelectedTab(value)
  }

  return (
    <TabContext value={String(selectedTab)}>
      <AppBar position="static">
        <Tabs value={selectedTab} onChange={handleChange}>
          {tabs.map(
            (tab): ReactElement => (
              <Tab key={tab.id} label={tab.label} />
            ),
          )}
        </Tabs>
      </AppBar>
      {tabs.map(
        (tab): ReactElement => (
          <TabPanel key={tab.id} value={tab.value}>
            {tab.children}
          </TabPanel>
        ),
      )}
    </TabContext>
  )
}
